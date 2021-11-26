<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1 class="m-0" >Taxista<small class="text-sm">Registrar</small></h1>
        </div><!-- /.col -->
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right  accent-success">
            <li class="breadcrumb-item"><a href="<?php echo base_url(); ?>administracion"><i class="fa fa-dashboard"></i> Administración</a></li>
            <li class="breadcrumb-item"><a href="<?php echo base_url().'ver-taxistas'; ?>"><i class="fa fa-dashboard"></i> Taxistas</a></li>
            <li class="breadcrumb-item active">Agregar</li>
          </ol>
        </div><!-- /.col -->
      </div><!-- /.row -->
    </div> 
  </section>
  
  <!-- Confirmación -->
  <?php if($this->session->flashdata("error")):?> 
  <section class="content">
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <h4 class="alert-heading">Información</h4>
        <ul>
          <?php if(!empty($this->session->flashdata("mensaje"))):?>
            <?php 
                foreach($this->session->flashdata("mensaje") as $m):
                  echo "<li>$m</li>";
                endforeach; 
            ?>
          <?php endif;?>
        </ul>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
  </section>
  <?php endif; ?>
  <!-- finalización de mensaje de confirmación -->
  
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card card-success">
            <div class="card-header">
              <h3 class="card-title"><i class="fas fa-plus"></i> Nuevo</h3>
            </div> 
            <input type="hidden" name="base_url" id="base_url" value="<?php echo base_url()."guardar-taxistas"; ?>"> 
            <form action="<?php echo base_url()."guardar-usuario"; ?>" method="POST" enctype="multipart/form-data">
                <div class="card-body">
                  <div class="row">
                    <div class="form-group col-12 <?php echo form_error('nombre') == true ? 'has-error':''?>">


                     <div class="row">
      <div class="col">
        <label for="cc" class="form-label">Cédula de Ciudadania</label>
        <input id="cc" type="text"  onkeypress="return onlyNumberKey(event)" name="cc" class="form-control" value="<?php 
          echo @$cc;

        ?>" >
      </div>



      <div class="col">
        <label for="lugar" class="form-label">Lugar de expedicion</label>
        <input id="lugar" type="text" name="lugar" class="form-control" >
      </div>

       <div class="col">
        <label for="direccion" class="form-label">direccion</label>
        <input id="direccion" type="text" name="direccion" class="form-control">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label for="pnombre" class="form-label">Primer Nombre</label>
        <input id="pnombre" type="text" name="pnombre" value="<?php 
          echo @$pnombre;

        ?>" class="form-control" >
      </div>
      <div class="col">
        <label for="snombre" class="form-label">Segundo Nombre</label>
        <input id="snombre" type="text" name="snombre" value="<?php 
          echo @$snombre;

        ?>" class="form-control" >
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label for="papellido" class="form-label">Primer Apellido</label>
        <input id="papellido" type="text" name="papellido" class="form-control" >
      </div>
      <div class="col">
        <label for="sapellido" class="form-label">Segundo Apellido</label>
        <input id="sapellido" type="text" name="sapellido" class="form-control" >
      </div>

    </div>

    <div class="row">
      <div class="col">
        <label for="EPS" class="form-label">EPS</label>
        <input id="EPS" type="text" name="eps" class="form-control" >
      </div>
      <div class="col">
        <label for="tipo_sangre" class="form-label">Tipo de sangre</label>
        <input id="tipo_sangre" type="text" name="rh" class="form-control" >
      </div>

    </div>

     <div class="row">
      <div class="col">
        <label for="placa" class="form-label">Matricula del vehiculo</label>
        <input id="Placa" type="text" name="placa" class="form-control" >
      </div>
      <div class="col">
        <label for="modelo" class="form-label">Modelo del vehiculo</label>
        <input id="model" type="text" name="modelo" class="form-control" >
      </div>
 
    </div>
    <div class="row">
      <div class="col">
        <label for="correo" class="form-label">Numero de contacto</label>
        <input id="tel" type="tel"  onkeypress="return onlyNumberKey(event)" name="contacto" class="form-control" placeholder="(+57)###-###-####">
      </div>
      <div><label for="correo" class="form-label">Ingreso</label>
      <input id="number" type="number"  name="Ingreso" class="form-control" value="0"></div>
      <div><label for="correo" class="form-label">Ganancia</label>
      <input id="number" type="number" name="ganancia" class="form-control" value="0"></div>
      
    </div>
    <div class="row">
      <div class="col">
        <label for="correo" class="form-label">Correo Electrónico</label>
        <input id="correo" type="email" name="correo" class="form-control" >
      </div>
    </div>
    <?php 
      if(isset($pwd_ok)): ?> 
        <div class="row">
          <div class="col">
            <h2>No coinciden las contraseñas</h2>
          </div>
        </div>
    <?php endif;  ?>
    <div class="row">
      <div class="col">
        <label for="pwd" class="form-label">Contraseña</label>
        <input id="pwd" type="password" name="pwd" class="form-control" minlength="8" maxlength="15" >
      </div>
      <div class="col">
        <label for="cpwd" class="form-label">Comfirmar contraseña</label>
        <input id="cpwd" type="password" name="cpwd" class="form-control">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-text">
          Tu contraseña debe tener mínimo 8  y má ximo 15 caracteres
        </div>
      </div>
    </div>
    <?php if(isset($archivo_max)):?>
      <div class="row">
      <div class="col">
        <label for="foto" class="form-label">El archivo es demasiado pesado</label>
      </div>
      </div>
    <?php endif; ?> 
    
    <div class="row">
      <div class="col">
        <label for="foto" class="form-label">Seleccionar una foto</label>
        <input id="foto" type="file" name="foto" class="form-control" accept="image\*" >
      </div>
    </div>
    
                      </div>
                    </div>           
                </div> <!--  CIERRE DEL BODY CARD-->

                <!-- Modal -->
                <div class="modal fade" id="modalImagen" tabindex="-1" role="dialog" aria-labelledby="modalImagenCenterTitle" aria-hidden="true">
                  <button type="button" class="close mr-2" data-dismiss="modal" arial-label="Close"><span aria-hidden="true">&times;</span></button>
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-body">
                        <img src="<?php echo base_url()."assets/img/logo_1.png"?>" style="" alt="" id="visorImagen" class="img-fluid rounded">
                      </div>
                      <div class="modal-footer d-flex">
                        <button type="button" class="btn btn-secondary mr-auto" id="show-previous-image"><i class="fa fa-arrow-left"></i>
                        </button>
                        <button type="button" id="show-next-image" class="btn btn-secondary ml-auto"><i class="fa fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                    
                    
                  </div>
                </div>
                <!-- Fin Modal -->
                <div class="card-footer d-flex">
                    <div class="ml-auto btn-group">
                      <a href="<?php echo base_url().'ver-taxistas'; ?>" name="btn-atras" id="btn-atras" class="btn bg-gradient-secondary" style="color:white;"><span class="fa fa-backward"> Cancelar</span></a>
                      <button type="submit" class="btn bg-gradient-success btn-flat active"><span class="fa fa-save"> Guardar</span></button>
                    </div>
                </div>              
            </form>
          </div>
        </div>
      </div>
    </div> 
  </section>
</div>
<!-- /.content-wrapper -->


      <script>
    function onlyNumberKey(evt) {
          
        // Only ASCII character in that range allowed
        var ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
          alert('Sólo valores numericos.');
            return false;
        return true;
    }
</script>