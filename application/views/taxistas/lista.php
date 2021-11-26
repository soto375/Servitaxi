<div class="content-wrapper" style="background: yellow; opacity:80% " >
   <section class="content-header" >
      <div class="container-fluid" >
        <div class="row mb-2">  
          <div class="col-sm-6">
            <h1 class="m-0">Taxista <small class="text-sm">Lista</small></h1>
          </div><!-- /.col -->
          <div class="col-sm-6 accent-success">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="<?php echo base_url(); ?>administracion"><i class="fa fa-dashboard"></i> Administración</a></li>
              <li class="breadcrumb-item active">Taxista</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
   </section>
   <!-- /.content-header -->


   <!-- Confirmación -->
  <?php if($this->session->flashdata("error")):?> 
  <section class="content" >
    <div class="alert alert-success alert-dismissible fade show" role="alert">
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
   
   <section class="content" >
      <div class="row">
         <div class="col">
            <div class="card">
               <div class="card-header d-flex flex-column flex-md-row">
                  <a class="btn btn-success" href="<?php echo base_url().'registrar-taxistas';?>"><i class="fa fa-plus"></i> Registrar Taxistas</a>
                  <div class="ml-auto d-flex flex-column flex-md-row"> <h6>Acciones:</h6> <small><span class="btn btn-outline-primary"><i class="fas fa-pencil-alt"></i></span><span>Ver|Editar </span><span class="btn btn-outline-danger"><i class="fa fa-trash"></i></span> <span>Eliminar </span></small>
                  </div>
               </div>
               <div class="card-body container-fluid">
                  <table id="example1" class="table table-bordered table-striped dataTable responsive" role="grid" aria-describedby="example1_info" style="width:100% !important;">
                     <thead>
                        <tr>
                          <th scope="col">Foto</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Apellido</th>
                          <th scope="col">Placa</th>
                          <th scope="col">Documento</th>
                          <th scope="col">Fecha de registro</th>
                          <th scope="col">Acciones</th>
                        </tr>
                     </thead>
                     <tbody>
                        <?php if(!empty($usuario)): ?>
                          <?php foreach ($usuario as $usuario ):?>
                            <tr>
                               <td>
                               <?php if(file_exists(".assets/archivos/taxista_id_".$usuario->cedula.".jpg") ||file_exists(".assets/archivos/taxista_id_".$usuario->cedula.".png")): ?>
                                  <img style="width:40px; height:40px;" src="<?php echo base_url()."/assets/archivos/taxista_id_".$usuario->cedula.".jpg"; ?>" /> 
                                <?php else: ?>
                                  <img style="width:40px; height:40px;" src="<?php echo base_url()."/assets/archivos/taxista_id_".$usuario->cedula.".png"; ?>" /> 
                                <?php endif; ?>
                                </td>
                              <td class="" scope="row">
                               <?php echo $usuario->primer_nombre; ?> 
                              </td>
                              <td class="" scope="row">
                               <?php echo @$usuario->primer_apellido; ?> 
                              </td>
                              <td class="" scope="row">
                               <?php echo $usuario->placa; ?> 
                              </td>
                              <td class="" scope="row">
                               <?php echo $usuario->cedula; ?> 
                              </td>
                              <td>
                                <?php
                               
                                 echo @strftime("%A, %d de %B del %Y", strtotime($usuario->fecha_registro)); ?>
                               
                              </td>
                              <td class="btn-group">
                                <a class="btn btn-outline-primary" href="<?php echo base_url().'editar-taxistas/'.$usuario->_id;?>"><i class="fas fa-pencil-alt"></i></a>

                                
                                <a class="btn btn-outline-danger btn-eliminar" href="<?php echo base_url().'eliminar-taxistas/'.$usuario->_id;?>"  ><i class="fa fa-trash"></i></a>
                              </td>
                            </tr>
                          <?php endforeach; ?>
                        <?php endif; ?>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   </section>
  
</div>