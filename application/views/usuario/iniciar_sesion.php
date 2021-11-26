	<div style="background-color:rgb(225,170,42); padding: 50px"> 


	<main class="container" id="app" style="width:530px; border: double; padding: 10px">
		<form action="<?php echo base_url().'auth'; ?>" method="POST">
		<div class="row justify-content-center">
			<div class="col-auto">
				<img style="width: 100px; height: 100px;" src="<?php echo base_url().'assets/img/logo.jpg'; ?>" alt="Logo servi taxi">
			</div>
		</div>	

		<!-- Verifica si existe la variable de sesión error_autenticacion -->
		<?php if( $this->session->flashdata("error_autenticacion") ): ?>
			<div class="row">
				<div class="col-12">
					<h3>Usuario/contraseña incorrectos</h3>
				</div>
			</div>	
		<?php endif; ?>


		<?php if( $this->session->flashdata("no_permitido") ): ?>
			<div class="row">
				<div class="col-12">
					<h3>Su sesión ha finalizado, debe inciar sesión para realizar alguna acción</h3>
				</div>
			</div>	
		<?php endif; ?>
		<div class="row">
			<div class="col">
				<label for="correo" class="form-label">Correo Electrónico</label>
				<input id="correo" type="email" name="correo" class="form-control" required>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<label for="pwd" class="form-label">Contraseña</label>
				<input id="pwd" type="password" name="pwd" class="form-control" minlength="8" maxlength="15" required>
			</div>
			
					</div>
		<div class="row">
			<div class="col">
				<br>
				<b><a class="form-text" href="<?php echo base_url().'admin/auth' ?>">Inicio de administrador</b>
					
				</a>

			</div>
		</div>
		<div class="row mt-3 justify-content-center">
			<div class="col-auto">
				<input type="submit" name="iniciar_sesion" value="Iniciar Sesión" class="btn btn-success btn-lg">
			</div>
		</div>
		</form>
	</main>
</div>