<?php 

	defined('BASEPATH') OR exit('No direct script access allowed');
	class Usuario_model extends CI_Model {
		
		function __construct(){
			parent::__construct();
			$this->load->library("mongodb");
			$this->db = $this->mongodb->db()->usuario;
			
		}

		function agregar($data_usuario){
			$result = $this->db->insertOne($data_usuario);
			return $result->getInsertedCount();
		}

		function autententicar($correo, $contrasena){
			$datos = $this->db->findOne(array(
				'correo' => $correo,
				'password' => $contrasena
			));
			
			return $datos;
		}

		function autententicar_encriptar($correo){
			$datos = $this->db->findOne(array(
				'correo' => $correo
			));
			
			return $datos;
		}
	}