
<div class="container pt-2">
    <div class="row" style="background: url(<?php echo base_url();?>assets/img/funny.jpg);  background-position:center center; opacity: 80%;   ">
        <!-- recorrer el arreglo de taxistas -->
        <!--  --> 
        <?php foreach ($usuario as $usuario): ?>
            <div class="col-auto m-2">
            <div class="card" style="width: 18rem;" >
                <!-- imprimir la foto -->
            <center>   <td>
                               <?php if(file_exists(".assets/archivos/taxista_id_".$usuario->cedula.".jpg") ||file_exists(".assets/archivos/taxista_id_".$usuario->cedula.".png") ): ?>
                                  <img style="width:150px; height:150px;" src="<?php echo base_url()."/assets/archivos/taxista_id_".$usuario->cedula.".jpg"; ?>" /> 
                                <?php else: ?>
                                  <img style="width:150px; height:150px;" src="<?php echo base_url()."/assets/archivos/taxista_id_".$usuario->cedula.".png"; ?>" /> 
                                <?php endif; ?>
                                </td>
              <div class="card-body">
                <b><h4 class="card-title"><?php echo @$usuario->primer_nombre; ?></h4></b>
                 <p class="card-text"><b>Segundo Nombre:</b> <?php echo $usuario->segundo_nombre?></p>
                <p class="card-text"><b>Primer Apellido:</b> <?php echo $usuario->primer_apellido?></p>
                 <p class="card-text"><b>Segundo Apellido: </b><?php echo $usuario->segundo_apellido?></p>
                  <p class="card-text"><b>Documento:</b> <?php echo $usuario->cedula?></p>
                 <p class="card-text"><b>EPP:</b> <?php echo $usuario->eps?></p>
                  <p class="card-text"><b>Rh:</b> <?php echo $usuario->tipo_sangre?></p>
                
                   <p class="card-text"><b>Modelo:</b> <?php echo $usuario->modelo?></p>
                
                   <p class="card-text"> <b>Placa:</b> <?php echo $usuario->placa?></p>
                    <p class="card-text"><b>Correo:</b> <?php echo $usuario->correo?></p>
                     <p class="card-text"><b>Contacto:</b> <?php echo $usuario->contacto?></p>
                      <p class="card-text"><b>Direccion:</b> <?php echo $usuario->direccion?></p>
                       
                
                
                
                
                
                
              </div>
        </div>   
         </div> 
        <?php endforeach; ?>
    </div>
</div>