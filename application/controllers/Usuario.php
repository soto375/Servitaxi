<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Usuario extends CI_Controller {

	function __construct(){
		parent::__construct();
		$this->load->model("Usuario_model");
		$this->load->model("Taxista_model");
		/*if(!$this->session->userdata("usuario")){
			$this->session->set_flashdata("no_permitido",true);
			redirect(base_url());
		} genera bucles de sesion pendiente arreglar*/
	}

	public function index(){
		$this->iniciar_sesion();
	}

	public function iniciar_sesion(){
		$this->load->view('usuario/cabecera', array("nombre_pagina" => "Iniciar sesión"));
		$this->load->view('usuario/iniciar_sesion');
		$this->load->view('usuario/footer');
	}
 
	public function guardar_usuario(){	
		$data = array();
		//verificar si las constraseñas son iguales
		if($this->input->post("pwd") != $this->input->post("cpwd")){
			$data["pwd_ok"] = true;
			$data = array_merge($data, $this->input->post());
			$this->load->view('administracion/header',array("nombre_pagina" => "Registrar usuario"));
			 $this->load->view("administracion/sidebar");
			$this->load->view('candidatos/agregar', $data);
			$this->load->view('administracion/footer');
		}else{
			//organizando los datos
			$data = array(
				'cedula' => $this->input->post("cc"),
				'primer_nombre' => $this->input->post("pnombre"),
				'segundo_nombre' => $this->input->post("snombre"),
				'primer_apellido' => $this->input->post('papellido'),
				'segundo_apellido' => $this->input->post('sapellido'),
				'eps' => $this->input->post('eps'),
				'tipo_sangre' => $this->input->post('rh'),
				'placa' => $this->input->post('placa'),
				'modelo' => $this->input->post('modelo'),
				'contacto' => $this->input->post('contacto'),
				'ingreso' => $this->input->post('ingreso'),
				'ganancia' => $this->input->post('ganancia'),
				'lugar' => $this->input->post('lugar'),
                'direccion' => $this->input->post('direccion'),
				'correo' => $this->input->post('correo'),
				'password' => password_hash($this->input->post('pwd'), PASSWORD_BCRYPT),
				'fecha_registro' => date("Y-m-d")

			);
			//guardar los datos
			if ( $this->Usuario_model->agregar($data) >= 1){
				$config['upload_path'] = './assets/archivos/';
				$config['allowed_types'] = 'jpg|png';
				$config['file_name'] = 'taxista_id_'.$this->input->post("cc");
				$config['max_size'] = '1024'; // tamaño maximo en kilobytes
				$config['max_width'] = '2000';
				$config['max_height'] = '3000';
				$this->load->library('upload', $config);
				if(!$this->upload->do_upload('foto')){
					//var_dump($this->upload->display_errors());
					//mostrar un mensaje
					
				}else{
					$ruta = $this->upload->data()["full_path"];
					// actualizar el registro
					// buscar el registro
					// cambiar el dato
				}
				//redireccionar
				redirect(base_url().'ver-taxistas');
			}else{

				var_dump($data);
			}
		}

	}
	 public function digitar()
	{ 
		 $datos_a_vista = array("usuario" => $this->Taxista_model->getAllTaxistas());
        $this->load->view("usuario/header");
        $this->load->view("usuario/sidebar");
        $this->load->view('taxistas/lista', $datos_a_vista);
        $this->load->view("usuario/footer2");
	}

	public function registrar_usuario_view(){
		$this->load->view('usuario/cabecera',
			array("nombre_pagina" => "Registrar usuario"));
		$this->load->view('usuario/registrar');
	}
 
	public function autenticacion(){
		
		$usuario = $this->Usuario_model->autententicar_encriptar($this->input->post('correo'));
		
		//verificando que la contraseña y correo coinciden con bd
		if($usuario){
			if(password_verify($this->input->post("pwd"), $usuario->password)){
				//Enviar al siguente modulo o función de la trazabilidad
				// Se autentico de forma correcta 
				
				
				//Creación de variables de sesión
				$this->session->set_userdata("sesion_usuario", true);
				$this->session->set_userdata("usuario", array(
					"id" => $usuario->_id,
					"correo" => $usuario->correo,
					"primer_nombre" => $usuario->primer_nombre
				));
				redirect(base_url().'usuario-digitar');
			}
			
			
		}else{
			$this->session->set_flashdata("error_autenticacion", true);
			redirect(base_url());
		}
	}

	 /*public function logout(){
        //borrar los datos de sesión
        $this->session->sess_destroy();
       
    }*/
}
