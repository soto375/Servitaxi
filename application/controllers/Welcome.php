<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	function __construct(){
		parent::__construct();
		$this->load->model("Mongo_model");
	}

	public function index()
	{
		
		//$this->load->view('welcome_message');
	}

	public function otra(){
		echo "Otra";
	}
}
