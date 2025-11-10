<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    protected $table = 'pedidos';
    protected $fillable = ['producto','cantidad','total','id_usuario'];
    public $timestamps = false;

    public function usuario()
    {
        return $this->belongsTo('App\Usuario','id_usuario','id');
    }
}
