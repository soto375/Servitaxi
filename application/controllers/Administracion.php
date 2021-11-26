<?php 

defined("BASEPATH") OR exit("No script");

class Administracion extends CI_Controller{

    function __construct()
    {
        parent::__construct();
        $this->load->model("Administracion_model");
        $this->load->model("Taxista_model");
        
        
    }
 
 
    

    public function index(){
      $datos_a_vista = array("usuario" => $this->Taxista_model->getAllTaxistas());
        $this->load->view("administracion/header");
        $this->load->view("administracion/sidebar");
        $this->load->view('taxistas/lista', $datos_a_vista);
        $this->load->view("administracion/footer");
    }



 public function ganancias()
    { 
        //obtener los datos que debo mostrar en la vista
        $datos = $this->Taxista_model->getAllTaxistas();
 
         $this->load->view("administracion/header");
        $this->load->view("administracion/sidebar");
        //enviar los datos de los candidatos a la vista
        $this->load->view('administracion/ganancia', array(
            "usuario" => $datos
        ));
        $this->load->view("administracion/footer");
    }

    public function registro_extendido()
    { 
        //obtener los datos que debo mostrar en la vista
        $datos = $this->Taxista_model->getAllTaxistas();
 
         $this->load->view("administracion/header");
        $this->load->view("administracion/sidebar");
        //enviar los datos de los candidatos a la vista
        $this->load->view('administracion/lista', array(
            "usuario" => $datos
        ));
        $this->load->view("administracion/footer");
    }
    public function ver_taxistas(){
        $datos_a_vista = array("usuario" => $this->Taxista_model->getAllTaxistas());
        $this->load->view("administracion/header");
        $this->load->view("administracion/sidebar");
        $this->load->view('taxistas/lista', $datos_a_vista);
        $this->load->view("administracion/footer");
    }
 
    public function editar_taxistas($usuario_id){
        $usuario = $this->Taxista_model->getOneTaxistas($usuario_id);
          $this->load->view("administracion/header");
        $this->load->view("administracion/sidebar");
        $this->load->view('taxistas/editar', array("usuario" => $usuario));
        $this->load->view("administracion/footer");
    
    }

   
    public function registrar_taxistas(){
        $this->load->view("administracion/header");
        $this->load->view("administracion/sidebar");
        $this->load->view('taxistas/agregar');
        $this->load->view("administracion/footer");
    }

    public function actualizar_taxistas(){

        $datos = array( 'cedula' => $this->input->post("cc"),
                'primer_nombre' => $this->input->post("pnombre"),
                'segundo_nombre' => $this->input->post("snombre"),
                'primer_apellido' => $this->input->post('papellido'),
                'segundo_apellido' => $this->input->post('eps'),
                'eps' => $this->input->post('sapellido'),
                'tipo_sangre' => $this->input->post('rh'),
                'placa' => $this->input->post('placa'),
                'modelo' => $this->input->post('modelo'),
                'contacto' => $this->input->post('contacto'),
                'ingreso' => $this->input->post('ingreso'),
                'ganancia' => $this->input->post('ganancia'),
                'lugar' => $this->input->post('lugar'),
                'direccion' => $this->input->post('direccion'),
                'correo' => $this->input->post('correo')
);
        /*$this->Administracion_model->actualizarUsuario( $this->input->post("_id"),$datos);*/
        /*var_dump($datos);*/

       

if  ($this->Taxista_model->actualizarTaxistas( $this->input->post("_id"),$datos)>=1){
               
                $datos = array_merge($datos, $this->input->post());
            

            /*var_dump($datos);  aquí es para ver los datos que manda*/ 
             redirect(base_url().'ver-taxistas');
              
            }else{
                var_dump($datos);
                redirect(base_url().'ver-taxistas');
            }

    }
    public function guardar_taxistas(){
        $resultado = $this->Taxista_model->guardarTaxistas($this->input->post());
        if( $resultado["guardado"] )
        {
            $config['upload_path'] = './assets/archivos/';
			$config['allowed_types'] = 'jpg|png';
			$config['file_name'] = 'taxista_id_'.$resultado["taxista_id"];
			$config['max_size'] =  1024 * 10; // tamaño maximo en kilobytes
			$config['max_width'] = '2000';
			$config['max_height'] = '3000';
			$this->load->library('upload', $config);
			if(!$this->upload->do_upload('imagen')){
				$this->session->set_flashdata("error_image", true);
                //var_dump($this->upload->display_errors());
                redirect(base_url().'ver-taxistas');
			}else{
                $this->session->set_flashdata("candidato_ok", true);
                redirect(base_url().'ver-taxistas');
			}
        }else{

        }
    }

    public function logout(){
        //borrar los datos de sesión
        $this->session->sess_destroy();
        redirect(base_url().'usuario');
    }

    public function eliminar($usuario_id){

        $usuario = $this->Taxista_model->getOneTaxistas($usuario_id);
        $this->load->view("administracion/header");
        $this->load->view("administracion/sidebar");
        $this->load->view('taxistas/eliminar', array("usuario" => $usuario));
        $this->load->view("administracion/footer");

     
    }
   public function borrados(){

        $datos = array( 'cedula' => $this->input->post("cc"),
                'primer_nombre' => $this->input->post("pnombre"),
                'segundo_nombre' => $this->input->post("snombre"),
                'primer_apellido' => $this->input->post('papellido'),
                'segundo_apellido' => $this->input->post('sapellido'),
                'password' => $this->input->post('pwd'),
                'eps' => $this->input->post('sapellido'),
                'tipo_sangre' => $this->input->post('rh'),
                'placa' => $this->input->post('placa'),
                'modelo' => $this->input->post('modelo'),
                'contacto' => $this->input->post('contacto'),
                'ingreso' => $this->input->post('ingreso'),
                'ganancia' => $this->input->post('ganancia'),
                'lugar' => $this->input->post('lugar'),
                'direccion' => $this->input->post('direccion'),
                'correo' => $this->input->post('correo')
);
        
 

if  ($this->Taxista_model->eliminarTaxistas( $this->input->post("_id"),$datos)>=0){
               
                $datos = array_merge($datos, $this->input->post());
            $this->load->view('administracion/header',
                array("nombre_pagina" => "Registrar usuario"));
            
               redirect(base_url().'ver-taxistas');
            }else{
                redirect(base_url().'ver-taxistas');
            }

    }
}