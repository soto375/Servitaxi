<?php 
      if(isset($informacion)){
        if(@file_exists($informacion->url)){
          $LOGO = base_url().$informacion->url;
        }else{
          $LOGO = LOGO_URL.LOGO_NAME;
        }
      }else{
          $LOGO = LOGO_URL.LOGO_NAME;
        }
      ?>

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-light-success elevation-2">
    <!-- Brand Logo -->
    <a href="<?php echo base_url();?>administracion" class="brand-link navbar-light" style="">
      
      <img src=<?php echo base_url(); ?>assets/img/logo.jpg alt="SERVITAXI LOGO" style="width: 50px; height: 50px; margin-right: 10px; border-radius: 100% !important;" class="img-circle">
      <span class="brand-text text-sm font-weight-light"> </span>
    </a> 
    <!-- Sidebar -->
    <div class="sidebar" style="background: url(<?php echo base_url();?>assets/img/multi.jpg); background-repeat: no-repeat; background-position:center center; background-size:cover;  ">
      <!-- Sidebar Menu -->
      <nav class="mt-2 text-sm">
        <ul class="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">
            <li class="nav-item">
                <a class="nav-link" href="<?php echo base_url().'ver-Ganancias';?>"><i class="fas fa-chalkboard-teacher nav-icon"></i><p>Ganancias</p></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="<?php echo base_url().'ver-taxistas';?>"><i class="fas fa-users nav-icon"></i><p>Taxistas</p></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="<?php echo base_url().'registro';?>"><i class="fas fa-users nav-icon"></i><p>Registro Extendido</p></a>
            </li>
                       
          
          <li class="nav-header"></li>
          <li class="nav-header"></li>
          <li class="nav-header"></li>
          
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
