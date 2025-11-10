<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsuariosTable extends Migration
{
    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre');
            $table->string('correo')->unique();
            $table->string('telefono')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('usuarios');
    }
}
