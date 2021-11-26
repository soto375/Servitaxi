	
<div style="background-color:rgb(225,170,42); padding: 50px"> 
 


	<main class="container" id="app" style="width:530px; border: double;border-color: rgb(225,85,44); padding: 10px">
		
		<form action="<?php echo base_url().'admin/autenticar'; ?>" method="POST">
		<div class="row justify-content-center">
			<div class="col-auto text-center">
				<img style="width: 100px; height: 100px;" src="<?php echo base_url().'assets/img/logo.jpg'; ?>" alt="Logo de ServiTaxi">
				<h2>Inicio de Sesión del Administrador</h2>
			</div>
		</div>
		<?php if($this->session->flashdata("error_auth")): ?>
		<div class="row">
			<div class="col-12">
				<h4 class="alert alert-warning text-center"> El usuario/contraseña no coinciden con los registrados</h4>
			</div>
		</div>
		<?php endif; ?>



		<div class="row">
			<div class="col">
				<label for="correo" class="form-label">Usuario</label>
				<input id="correo" type="email" name="usuario" class="form-control" required>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<label for="pwd" class="form-label">Contraseña</label>
				<input id="pwd" type="password" name="pwd" class="form-control" minlength="5" maxlength="15" required>
			</div>
			<div class="row">
			<div class="col">
				
			<!--	<br>
				<b><a class="form-text" href="<?php echo base_url().'iniciar-sesion' ?>">Inicio de usuario
					
				</a></b>-->

			</div>
		</div>
			
					</div>
		<div class="row mt-3 justify-content-center">
			<div class="col-auto">
				<input type="submit" name="iniciar_sesion" value="Iniciar Sesión" class="btn btn-success btn-lg">
			</div>
		</div>
		</form>
	</main>  </div>
	
