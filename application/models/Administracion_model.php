<?php 
    
    defined("BASEPATH") or exit("No direct script access allowed");

    class Administracion_model extends CI_Model {

        function __construct()
        {   
            parent::__construct();
			$this->load->library("mongodb");
			$this->db = $this->mongodb->db()->admin;
        }

        public function getAllVotantes(){
            //se buscan los datos, se obtienen todos los datos
            return $this->db->find(array());
        }

        public function getAdministrador($admin_user){
            //se busca un dato
            return $this->db->findOne(array(
                'admin_user' => $admin_user
            ));
        }

        function autenticar($usuario){
			$datos = $this->db->findOne(array(
				'usuario' => $usuario
			));
			
			return $datos;
		}

        
     
    }