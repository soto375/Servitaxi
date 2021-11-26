<?php 

defined('BASEPATH') OR exit('No direct script access allowed');

class Votacion extends CI_Controller {

	function __construct(){
		parent::__construct();
		$this->load->model("Usuario_model");
		$this->load->model("Taxista_model");
		$this->load->model("Votacion_model");
		if(!$this->session->userdata("usuario")){
			$this->session->set_flashdata("no_permitido",true);
			redirect(base_url());
		}
	}

	

	public function registrar_voto($candidato_id){
		//Buscar el candidato seleccionado
		$candidato_selecionado = $this->Taxista_model->getOneTaxista($candidato_id);

		//preparar los datos para guardar el voto
		$votacion_correcta = $this->Votacion_model->registrar_votacion(array(
			"nombre_candidato" => $candidato_selecionado->nombre_candidato,
			"candidato_id" => $candidato_selecionado->_id,
			"votante_id" => $this->session->userdata("usuario")["id"]
		));

		if($votacion_correcta){
			//Enviar a una vista -> siguiente paso de la trazabilidad
			echo "Voto registrado con exito";
			//Eliminar sesión
			$this->session->sess_destroy();

		}else{
			echo "No se ha registrado su voto";
		}
	}

}
