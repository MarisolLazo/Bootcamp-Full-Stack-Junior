<?php
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsuarioSeeder extends Seeder
{
    public function run()
    {
        DB::table('usuarios')->insert([
            ['nombre'=>'Ricardo Ramos','correo'=>'ricardo.ramos@example.com','telefono'=>'71234567'],
            ['nombre'=>'María López','correo'=>'maria.lopez@example.com','telefono'=>'78901234'],
            ['nombre'=>'Roberto Sánchez','correo'=>'roberto.sanchez@example.com','telefono'=>'70123456'],
            ['nombre'=>'Ana Martínez','correo'=>'ana.martinez@example.com','telefono'=>'72233445'],
            ['nombre'=>'Luis Romero','correo'=>'luis.romero@example.com','telefono'=>'73344556'],
        ]);
    }
}
