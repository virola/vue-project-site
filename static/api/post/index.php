<?php
/**
 * 接收post请求
 */
$type = $_GET['type'];

$resp = array(
  'status' => 'ok',
  'data' => array(
    'userInfo' => array(
      'user_id'=> 530,
      'username'=> 'virola'
    )
  ) 
);

echo json_encode($resp);
