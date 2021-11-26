<?php 
    defined("BASEPATH") or exit("No script access allowed");

    class Taxista_model extends CI_Model {
        
        function __construct()
        {   
            parent::__construct();
			$this->load->library("mongodb");
			$this->db = $this->mongodb->db()->usuario;
        }

        
        //obtener todos los datos de la coleccion candidatos
        public function getAllTaxistas(){
            return $this->db->find(); 
        }

        public function getOneTaxistas($id){
            return $this->db->findOne(array(
                '_id' => $this->mongodb->getObjetId($id)
            ));
        }

        

        public function guardarTaxistas($datos){
            $datos_guardar = array(
                "cedula" => $datos["cedula"],
                "primer_nombre" => $datos["primer_nombre"],
                "segundo_nombre" => $datos["segundo_nombre"],
                "primer_apellido" =>  $datos["primer_apellido"],
                "primer_segundo" =>  $datos["primer_segundo"],
                "eps" =>  $datos["eps"],
                "tipo_sangre" =>  $datos["tipo_sangre"],
                "placa" =>  $datos["placa"],
                "modelo" =>  $datos["modelo"],
                 "ingreso" =>  $datos["ingreso"],
                "ganancia" =>  $datos["ganancia"],
                "lugar" =>  $datos["lugar"],
                "direccion" =>  $datos["direccion"],
                "correo" =>  $datos["correo"],
                "password" =>  $datos["password"],
               
                
                "fecha_registro" => date("Y-m-d")
            );
            $resultado = $this->db->insertOne($datos_guardar);
            if($resultado->getInsertedCount() > 0){
                return array("guardado" => true,"candidato_id" => $resultado->getInsertedId());
            }else{
                return array("guardado" => false);
            }
        }
       

      public function actualizarTaxistas($_id, $datos){
            //Buscar por Id
            $resultado = $this->db->updateOne(
                array(
                    "_id" =>  $this->mongodb->getObjetId($_id)
                ),
                array(  
                    '$set' => $datos
                )
            );
            return $resultado->getMatchedCount();

             if ($resultado->getModifiedCount() >= 1){
                return true;
            }
            else{   return false;}
        } 

        

       public function eliminarTaxistas($_id,$datos){
            $resultado = $this->db->findOneAndDelete(  array(
                    "_id" =>  $this->mongodb->getObjetId($_id)
                ),
                array(  
                    '$set' => $datos
                ));
        }
    }