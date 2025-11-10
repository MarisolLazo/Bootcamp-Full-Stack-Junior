<?php

Route::get('/', function(){ return 'Proyecto: Consultas SQL en Laravel'; });

// Query Builder routes
Route::get('/api/query/users', 'ConsultaController@qb_users');
Route::get('/api/query/orders/user/2', 'ConsultaController@qb_orders_user_2');
Route::get('/api/query/orders/details', 'ConsultaController@qb_orders_with_user_details');
Route::get('/api/query/orders/price-range', 'ConsultaController@qb_orders_price_range');
Route::get('/api/query/users/starts-with/R', 'ConsultaController@qb_users_start_r');
Route::get('/api/query/orders/count/user/5', 'ConsultaController@qb_count_orders_user_5');
Route::get('/api/query/orders/with-users/desc', 'ConsultaController@qb_orders_with_users_desc');
Route::get('/api/query/orders/total-sum', 'ConsultaController@qb_orders_total_sum');
Route::get('/api/query/orders/cheapest', 'ConsultaController@qb_cheapest_order_with_user');
Route::get('/api/query/orders/group-by-user', 'ConsultaController@qb_group_product_qty_total_by_user');

// Eloquent routes
Route::get('/api/eloquent/users', 'ConsultaController@elo_users');
Route::get('/api/eloquent/orders/user/2', 'ConsultaController@elo_orders_user_2');
Route::get('/api/eloquent/orders/details', 'ConsultaController@elo_orders_with_user_details');
Route::get('/api/eloquent/orders/price-range', 'ConsultaController@elo_orders_price_range');
Route::get('/api/eloquent/users/starts-with/R', 'ConsultaController@elo_users_start_r');
Route::get('/api/eloquent/orders/count/user/5', 'ConsultaController@elo_count_orders_user_5');
Route::get('/api/eloquent/orders/with-users/desc', 'ConsultaController@elo_orders_with_users_desc');
Route::get('/api/eloquent/orders/total-sum', 'ConsultaController@elo_orders_total_sum');
Route::get('/api/eloquent/orders/cheapest', 'ConsultaController@elo_cheapest_order_with_user');
Route::get('/api/eloquent/orders/group-by-user', 'ConsultaController@elo_group_product_qty_total_by_user');
