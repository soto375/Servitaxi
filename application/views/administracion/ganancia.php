
<div class="container pt-2" style="background: url(<?php echo base_url();?>assets/img/amarillo.jpg); background-repeat: no-repeat; background-position:center center; background-size:cover;  ">
    <div class="row">
        <!-- recorrer el arreglo de taxistas -->
        <!--  --> 
        <?php foreach ($usuario as $usuario): ?>
            <div class="col-auto m-2">
            <div class="card" style="width: 18rem; opacity:80%">
                <!-- imprimir la foto -->
            <center>  <td>
                               <?php if(file_exists(".assets/archivos/taxista_id_".$usuario->cedula.".jpg")||file_exists(".assets/archivos/taxista_id_".$usuario->cedula.".png")): ?>
                                  <img style="width:150px; height:150px;" src="<?php echo base_url()."/assets/archivos/taxista_id_".$usuario->cedula.".jpg"; ?>" /> 
                                <?php else: ?>
                                  <img style="width:150px; height:150px;" src="<?php echo base_url()."/assets/archivos/taxista_id_".$usuario->cedula.".png"; ?>" /> 
                                <?php endif; ?>
                                </td></center>
              <div class="card-body">
                <b><h4 class="card-title"><?php echo @$usuario->primer_nombre; ?></h4></b>
                 
                <p class="card-text"><b>Primer Apellido:</b> <?php echo $usuario->primer_apellido?></p>
                 
                   <p class="card-text"><b>Modelo:</b> <?php echo $usuario->modelo?></p>
                
                   <p class="card-text"> <b>Placa:</b> <?php echo $usuario->placa?></p>
                    <p class="card-text"><b>Ingreso:</b> <?php echo $usuario->ingreso?></p>
                     <p class="card-text"><b>Ganancia:</b> <?php echo $usuario->ganancia?></p>
                      
                       
                
                
                
                
                
                
              </div>
        </div>   
         </div> 
        <?php endforeach; ?>
    </div>
</div>