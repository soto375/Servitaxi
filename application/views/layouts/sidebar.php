 <?php $LOGO = LOGO_URL.LOGO_NAME; ?>
<aside class="main-sidebar sidebar-light-success elevation-2">
    <!-- Brand Logo -->
    <a href="<?php echo base_url();?>dashboard" class="brand-link navbar-light" style="">
      
      <img src="<?php echo $LOGO; ?>" alt="Logo Ventanilla de negocios verdes" style="width: 100px; height: 100px; margin-right: 10px; border-radius: 100% !important;" class="img-circle">
      <span class="brand-text text-sm font-weight-light">Tienda Verde </span>
    </a> 
    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar Menu -->
      <nav class="mt-2 text-sm">
        <ul class="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">
        <?php if(!empty($modulos)):?> 

          <?php foreach($modulos as $etiqueta): ?>  
            <li class="nav-header"><?php echo $etiqueta['descripcion']; ?></li>
            <?php if(!empty($etiqueta['modulos'])):?>
              <?php foreach($etiqueta['modulos'] as $modulo):?>
                <?php if(!empty($modulo['hijos'])):
                  if(isset($_SESSION['modulo_active'])){
                    $id_hijos = array_column($modulo['hijos'], 'id');
                    $menu_padre = in_array($_SESSION['modulo_active'], $id_hijos)?'menu-open':'';
                    $active_padre = ($menu_padre)?'active':'';
                  }else{
                    $menu_padre ='';
                    $active_padre ='';
                  }
                 
                ?>

                <li class="nav-item has-treeview <?php echo $menu_padre; ?>">
                  <a href="#" class="nav-link <?php echo $active_padre; ?>">
                    <i class="nav-icon <?php echo $modulo['icon']; ?>"></i>
                    <p><?php echo $modulo['nombre']; ?></p>
                    <i class="right fas fa-angle-left"></i>
                  </a>
                  <ul class="nav nav-treeview">
                    <?php foreach($modulo['hijos'] as $hijo):
                      $menu_active = (isset($_SESSION['modulo_active']) && $hijo['id']==$_SESSION['modulo_active'])?'active':'';
                      ?>
                      <li class="nav-item"><a class="nav-link <?php echo $menu_active; ?>" href="<?php echo base_url(); ?><?php echo $hijo['controlador'];?>"><i class="nav-icon <?php echo $hijo['icon'];?>"></i> <span><?php echo $hijo['nombre'];  ?></span></a></li>
                    <?php endforeach; ?>
                  </ul>
                </li>
                <?php else: 
                  $menu_active = (isset($_SESSION['modulo_active']) && $modulo['id']==$_SESSION['modulo_active'])?'active':'';
                  ?>
                  <li class="nav-item">
                    <a class="nav-link <?php echo $menu_active; ?>" href="<?php echo base_url().$modulo['controlador'];?>"><i class="<?php echo $modulo['icon']; ?> nav-icon"></i><p><?php echo $modulo['nombre']; ?></p></a>
                  </li>
                <?php endif;?>
              <?php endforeach;?>
            <?php endif;?>
          <?php endforeach; ?>
        <?php endif; ?>
          
          
          <li class="nav-header"></li>
          <li class="nav-header"></li>
          <li class="nav-header"></li>
          
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
