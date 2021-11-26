<?php 

defined("BASEPATH") OR exit("No script");

class Dashboard extends CI_Controller {

	public function __construct(){
		parent::__construct();
		//crear variables de session
		if($this->session->userdata('logged')){

		}else{
			//crear variables de sesión para mostrar mensajes
			$this->session->set_flashdata("no_logged","Su sesión expiró. Por favor ingresar sus credenciales");
			//redireccionar
			redirect(base_url().'iniciar-sesion');
		}

	}

	public function index(){
		$this->load->view('layouts/header');
		$this->load->view('layouts/sidebar');
	}
}