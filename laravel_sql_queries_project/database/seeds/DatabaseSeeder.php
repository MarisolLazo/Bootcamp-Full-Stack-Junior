<?php
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call('UsuarioSeeder');
        $this->call('PedidoSeeder');
    }
}
