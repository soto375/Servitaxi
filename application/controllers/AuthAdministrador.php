<?php 
    defined("BASEPATH") or exit("No direct script access allowed");

    class AuthAdministrador extends CI_Controller{
        
        function __construct()
        {
            parent::__construct();
            $this->load->model("Administracion_model");
        }
        public function index(){
            $this->load->view("administrador/cabecera");
            $this->load->view("administrador/iniciar_sesion");
            $this->load->view("administrador/footer");
        }

        public function autenticar(){
            $usuario = $this->input->post("usuario");
            $data_base= $this->Administracion_model->autenticar($usuario);
            
            if ($data_base->clave==$this->input->post("pwd")){
                $this->session->set_userdata("logged", true);
                $this->session->set_userdata("usuario", array(
                    "nombre" => $data_base->usuario,
                    "id"=>$data_base->_id
                ));
                redirect(base_url().'administracion');
             }else{

                $this->session->set_flashdata("error_auth", true);
                 redirect(base_url().'admin/auth');
           }
        }
    }