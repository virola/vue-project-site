<?php
/**
 * 接收post请求
 */
$type = $_GET['type'];

$resp = array(
  'status' => 'ok',
  'data' => array() 
);
echo json_encode($resp);
