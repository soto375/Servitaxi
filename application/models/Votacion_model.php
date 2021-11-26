<?php 
    defined("BASEPATH") or exit("no access allowed");

    class Votacion_model extends CI_Model{

        function __construct()
        {   
            parent::__construct();
			$this->load->library("mongodb");
			$this->db = $this->mongodb->db()->votacion;
        }

        function registrar_votacion($datos){

            $resultado = $this->db->insertOne(array(
                "votante_id" => $datos["votante_id"],
                "candidato_id" => $datos["candidato_id"],
                "fecha_registro" => date("Y-m-d") #registrar el dia de hoy
            ));

            if ($resultado->getInsertedCount() > 0){
                return true;
            }else{
                return false;
            }
        }

        function obtenerVotacion(){
            $votacion = $this->db->aggregate(array(
                "$group" => array("_id" => "$candidato_id", "total" => array( "$sum"  => 1))
            ));
        }

        
    }