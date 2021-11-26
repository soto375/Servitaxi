 
  <footer class="main-footer accent-success">
    <strong>Copyright &copy; <?php echo date("Y") ?> <a href="#">Servi Taxi</a>.</strong> Todos los derechos reservados.
    <div class="float-right d-none d-sm-inline-block">
      <b>Version prototipo</b> 1.0.0
    </div>
  </footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
</div>
<!-- ./wrapper -->

<!-- jQuery 3 -->
<script src="<?php echo base_url(); ?>assets/template/jquery/jquery.min.js"></script>
<!-- jQuery UI 1.11.4 -->
<script src="<?php echo base_url(); ?>assets/template/jquery-ui/jquery-ui.min.js"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
  $.widget.bridge('uibutton', $.ui.button)
</script>
<!-- Bootstrap 4 -->
<script src="<?php echo base_url(); ?>assets/template/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- ChartJS -->
<script src="<?php echo base_url(); ?>assets/template/chart.js/Chart.min.js"></script>
<!-- Sparkline -->
<script src="<?php echo base_url(); ?>assets/template/sparklines/sparkline.js"></script>
<!-- JQVMap -->
<script src="<?php echo base_url(); ?>assets/template/jqvmap/jquery.vmap.min.js"></script>
<script src="<?php echo base_url(); ?>assets/template/jqvmap/maps/jquery.vmap.usa.js"></script>
<!-- jQuery Knob Chart -->
<script src="<?php echo base_url(); ?>assets/template/jquery-knob/jquery.knob.min.js"></script>
<!-- daterangepicker -->
<script src="<?php echo base_url(); ?>assets/template/moment/moment.min.js"></script>
<script src="<?php echo base_url(); ?>assets/template/daterangepicker/daterangepicker.js"></script>
<!-- Tempusdominus Bootstrap 4 -->
<script src="<?php echo base_url(); ?>assets/template/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>
<!-- Summernote -->
<script src="<?php echo base_url(); ?>assets/template/summernote/summernote-bs4.min.js"></script>
<!-- overlayScrollbars -->
<script src="<?php echo base_url(); ?>assets/template/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
<!-- AdminLTE App -->
<script src="<?php echo base_url(); ?>assets/template/js/adminlte.js"></script>

<!-- Select2 -->
<script src="<?php echo base_url(); ?>assets/template/select2/js/select2.full.min.js"></script>
<!-- SlimScroll -->
<script src="<?php echo base_url(); ?>assets/template/jquery-slimscroll/jquery.slimscroll.min.js"></script>
<!-- FastClick -->
<script src="<?php echo base_url(); ?>assets/template/fastclick/fastclick.js"></script>
<!-- DataTables -->
<script src="<?php echo base_url(); ?>assets/template/datatables/jquery.dataTables.min.js"></script>
<script src="<?php echo base_url(); ?>assets/template/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="<?php echo base_url(); ?>assets/template/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="<?php echo base_url(); ?>assets/template/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<!-- TinyMce -->
<script src="<?php echo base_url(); ?>resources/tinymce/tinymce.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vanilla-lazyload@12.4.0/dist/lazyload.min.js"></script>
<!-- ChartJS 
<script src="<?php echo base_url(); ?>assets/Chart.js/Chart.js"></script>-->
<?php if(!empty($jquery)): ?>
  <?php 
    if(is_array($jquery)){
      foreach ($jquery as $valor) {
        echo "<script src='".base_url().$valor."'></script>";
      }
    }else{
      echo "<script src='".base_url()."assets/template/js/".$jquery."'></script>";
    }
  ?>
<?php endif; ?>  
<script>
  $(document).ready(function () {

    //$('.sidebar-mini').tree();
    //$.widget.bridge('uibutton', $.ui.button);
    
    if ( $("select#cms_modulo_id").length > 0 ) {
      // hacer algo aquí si el elemento existe
      $('select#cms_modulo_id').select2();
    }
    if ( $("select#cantidad_columna").length > 0 ) {
      // hacer algo aquí si el elemento existe
      $('select#cantidad_columna').select2();
    }
    if ( $("select#cms_tipo_menu_id").length > 0 ) {
      // hacer algo aquí si el elemento existe
      $('select#cms_tipo_menu_id').select2();
    }
    
    if ( $("select#persona_id").length > 0 ) {
      // hacer algo aquí si el elemento existe
      $('select#persona_id').select2();
    }

    //$('.sidebar-menu').tree();
    
    if ( $("#example1").length > 0 ) {
      // hacer algo aquí si el elemento existe
      $('#example1').DataTable({
        'paging'      : true,
        'lengthChange': true,
        'searching'   : true,
        'ordering'    : true,
        'info'        : true,
        'autoWidth'   : true,
        'language'    : {
          'lengthMenu': "Mostrar _MENU_ registros por página",
          'zeroRecords': "No se encuentran resultados en su busqueda",
          'searchPlaceholder': "Buscar registros",
          'info': "Mostrando registros _START_ al _END_ de un total _TOTAL_ registros",
          'infoEmpty': "No existen registros",
          'infoFiltered': "(filtrado de un total de _MAX_ registros)",
          'search': "Buscar:",
          'paginate': {
            'first': "Primero",
            'last': "Último",
            'next': "Siguiente",
            'previous': "Anterior"
          },
        }
      });
    }
    if ( $("#example2").length > 0 ) {
      // hacer algo aquí si el elemento existe
      $('#example2').DataTable({
        'paging'      : true,
        'lengthChange': true,
        'searching'   : true,
        'ordering'    : true,
        'info'        : true,
        'autoWidth'   : true,
        'language'    : {
          'lengthMenu': "Mostrar _MENU_ registros por página",
          'zeroRecords': "No se encuentran resultados en su busqueda",
          'searchPlaceholder': "Buscar registros",
          'info': "Mostrando registros _START_ al _END_ de un total _TOTAL_ registros",
          'infoEmpty': "No existen registros",
          'infoFiltered': "(filtrado de un total de _MAX_ registros)",
          'search': "Buscar:",
          'paginate': {
            'first': "Primero",
            'last': "Último",
            'next': "Siguiente",
            'previous': "Anterior"
          },
        }
      });
    }
      
  });
</script>
</body>
</html>