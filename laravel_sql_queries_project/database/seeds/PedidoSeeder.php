<?php
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PedidoSeeder extends Seeder
{
    public function run()
    {
        DB::table('pedidos')->insert([
            ['producto'=>'Camiseta','cantidad'=>2,'total'=>120.00,'id_usuario'=>1],
            ['producto'=>'Pantalón','cantidad'=>1,'total'=>80.00,'id_usuario'=>2],
            ['producto'=>'Zapatos','cantidad'=>1,'total'=>150.00,'id_usuario'=>1],
            ['producto'=>'Gorra','cantidad'=>3,'total'=>45.00,'id_usuario'=>3],
            ['producto'=>'Chaqueta','cantidad'=>1,'total'=>220.00,'id_usuario'=>5],
            ['producto'=>'Calcetines','cantidad'=>5,'total'=>30.00,'id_usuario'=>4],
            ['producto'=>'Bufanda','cantidad'=>1,'total'=>110.00,'id_usuario'=>2],
        ]);
    }
}
