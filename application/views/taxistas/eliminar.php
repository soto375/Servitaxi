<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1 class="m-0">Taxista <small class="text-sm">Eliminar</small></h1>
        </div><!-- /.col -->
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right  accent-success">
            <li class="breadcrumb-item"><a href="<?php echo base_url(); ?>administracion"><i class="fa fa-dashboard"></i> Administración</a></li>
            <li class="breadcrumb-item"><a href="<?php echo base_url().'ver-taxistas'; ?>"><i class="fa fa-dashboard"></i> Taxista</a></li>
            <li class="breadcrumb-item active">Eliminar</li>
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
              <h3 class="card-title"><i class="fas fa-plus"></i> eliminar</h3>
            </div>
            
            <form action="<?php echo base_url()."borrado"; ?>" method="POST" enctype="multipart/form-data">
                


                <div class="card-body">
                  <div class="row">
                    <div class="form-group col-12 <?php echo form_error('nombre') == true ? 'has-error':''?>">

                     <div class="row">
                       <input type="hidden" class="form-control" id="nombre" name="_id" value="<?php echo $usuario->_id;?>"  >

      <div class="col">
        <label for="cc" class="form-label">Cédula de Ciudadania</label>
        <input id="cc" type="text" name="cc" class="form-control" value="<?php echo $usuario->cedula ?>">
      </div>

          <div class="col">
        <label for="lugar" class="form-label">Lugar de expedicion</label>
        <input id="lugar" type="text" name="lugar" class="form-control" value="<?php echo $usuario->lugar ?>">
      </div>

       <div class="col">
        <label for="direccion" class="form-label">direccion</label>
        <input id="direccion" type="text" name="direccion" class="form-control" value="<?php echo $usuario->direccion ?>">
      </div>

    </div>


    <div class="row">
      <div class="col">
        <label for="pnombre" class="form-label">Primer Nombre</label>
        <input id="pnombre" type="text" name="pnombre" value="<?php echo $usuario->primer_nombre ?>"class="form-control" >
      </div>
      <div class="col">
        <label for="snombre" class="form-label">Segundo Nombre</label>
        <input id="snombre" type="text" name="snombre"value="<?php echo $usuario->segundo_nombre ?>" class="form-control" >
      </div> 
    </div>
    <div class="row">
      <div class="col">
        <label for="papellido" class="form-label">Primer Apellido</label>
        <input id="papellido" type="text" name="papellido" class="form-control" value="<?php echo $usuario->primer_apellido ?>">
      </div>
      <div class="col">
        <label for="sapellido" class="form-label">Segundo Apellido</label>
        <input id="sapellido" type="text" name="sapellido" class="form-control" value="<?php echo $usuario->segundo_apellido?>">
      </div>

    </div>

    <div class="row">
      <div class="col">
        <label for="EPS" class="form-label">EPS</label>
        <input id="EPS" type="text" name="eps" class="form-control" value="<?php echo $usuario->eps ?>">
      </div>
      <div class="col">
        <label for="tipo_sangre" class="form-label">Tipo de sangre</label>
        <input id="tipo_sangre" type="text" name="rh" class="form-control"value="<?php echo $usuario->tipo_sangre?>" >
      </div>

    </div>

     <div class="row">
      <div class="col">
        <label for="placa" class="form-label">Matricula del vehiculo</label>
        <input id="Placa" type="text" name="placa" class="form-control" value="<?php echo $usuario->placa ?>">
      </div>
      <div class="col">
        <label for="modelo" class="form-label">Modelo del vehiculo</label>
        <input id="model" type="text" name="modelo" class="form-control"value="<?php echo $usuario->modelo ?>" >
      </div>

    </div>

<div class="row">
      <div class="col">
        <label for="correo" class="form-label">Numero de contacto</label>
        <input id="correo" type="text" name="contacto" class="form-control" value="<?php echo $usuario->contacto ?>">
      </div>

       <div class="col">
        <label for="correo" class="form-label">Ingresos</label>
        <input id="correo" type="text" name="ingreso" class="form-control" value="<?php echo $usuario->ingreso ?>">
      </div>

      <div><label for="correo" class="form-label">Ganancia</label>
      <input id="correo" type="text" name="ganancia" class="form-control" value="<?php echo $usuario->ganancia ?>"></div>
    </div>
   


    <div class="row"><div class="col">
        <label for="correo" class="form-label">Correo Electrónico</label>
        <input id="correo" type="email" name="correo" class="form-control"value="<?php echo $usuario->correo ?>" >
      </div> </div>
      
    
   <div class="row">
      <div class="col">
        
        <input id="correo" type="hidden" name="pwd" class="form-control"value="<?php echo $usuario->password ?>" >
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
                      <button type="submit" class="btn bg-gradient-success btn-flat active"><span class="fa fa-save"> Eliminar</span></button>
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