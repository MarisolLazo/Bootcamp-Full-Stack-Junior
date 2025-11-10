<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table = 'usuarios';
    protected $fillable = ['nombre','correo','telefono'];
    public $timestamps = false;

    public function pedidos()
    {
        return $this->hasMany('App\Pedido','id_usuario','id');
    }
}
