<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/


$route['default_controller'] = 'AuthAdministrador'; /*va 'usuario' pero mientras dejaré así*/

$route['registrar-usuario'] = 'Usuario/registrar_usuario_view';

$route['guardar-usuario'] = 'Usuario/guardar_usuario';

$route['iniciar-sesion'] = 'Usuario/iniciar_sesion';

$route['auth'] = "Usuario/autenticacion";


 
$route['administracion'] = 'Administracion';

$route['ver-taxistas'] = 'Administracion/ver_taxistas';
$route['actualizar-taxistas'] = 'Administracion/actualizar_taxistas';
$route['guardar-taxistas'] = 'Administracion/guardar_taxistas';
$route['registrar-taxistas'] = 'Administracion/registrar_taxistas';
$route['editar-datos-taxistas'] = 'Administracion/actualizar_taxistas';
$route['eliminar-taxistas/(:any)'] = 'Administracion/eliminar/$1';
$route['editar-taxistas/(:any)'] = 'Administracion/editar_taxistas/$1';
$route['borrado'] = 'Administracion/borrados';
$route['ver-Ganancias'] = 'Administracion/ganancias';
$route['registro'] = 'Administracion/registro_extendido';



$route['admin/auth'] = 'AuthAdministrador';
$route['admin/autenticar'] = 'AuthAdministrador/autenticar';
$route['admin/logout'] = "Administracion/logout";

$route['registrar-voto/(:any)'] = 'Votacion/registrar_voto/$1';




$route['usuario-digitar'] = 'Usuario/digitar';

$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;
