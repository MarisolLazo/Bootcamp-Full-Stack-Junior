<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Usuario;
use App\Pedido;

class ConsultaController extends Controller
{
    // --- QUERY BUILDER (QB) METHODS ---
    public function qb_users()
    {
        $users = DB::table('usuarios')->get();
        return response()->json($users);
    }

    public function qb_orders_user_2()
    {
        $orders = DB::table('pedidos')->where('id_usuario', 2)->get();
        return response()->json($orders);
    }

    public function qb_orders_with_user_details()
    {
        $orders = DB::table('pedidos')
            ->join('usuarios', 'pedidos.id_usuario', '=', 'usuarios.id')
            ->select('pedidos.*', 'usuarios.nombre as usuario_nombre', 'usuarios.correo as usuario_correo')
            ->get();
        return response()->json($orders);
    }

    public function qb_orders_price_range()
    {
        $orders = DB::table('pedidos')->whereBetween('total', [100,250])->get();
        return response()->json($orders);
    }

    public function qb_users_start_r()
    {
        $users = DB::table('usuarios')->where('nombre', 'like', 'R%')->get();
        return response()->json($users);
    }

    public function qb_count_orders_user_5()
    {
        $count = DB::table('pedidos')->where('id_usuario', 5)->count();
        return response()->json(['user_id' => 5, 'orders_count' => $count]);
    }

    public function qb_orders_with_users_desc()
    {
        $orders = DB::table('pedidos')
            ->join('usuarios','pedidos.id_usuario','=','usuarios.id')
            ->select('pedidos.*','usuarios.nombre as usuario_nombre','usuarios.correo as usuario_correo')
            ->orderBy('pedidos.total','desc')
            ->get();
        return response()->json($orders);
    }

    public function qb_orders_total_sum()
    {
        $sum = DB::table('pedidos')->sum('total');
        return response()->json(['total_sum' => $sum]);
    }

    public function qb_cheapest_order_with_user()
    {
        $order = DB::table('pedidos')
            ->join('usuarios','pedidos.id_usuario','=','usuarios.id')
            ->select('pedidos.*','usuarios.nombre as usuario_nombre','usuarios.correo as usuario_correo')
            ->orderBy('pedidos.total','asc')
            ->first();
        return response()->json($order);
    }

    public function qb_group_product_qty_total_by_user()
    {
        $rows = DB::table('pedidos')
            ->join('usuarios','pedidos.id_usuario','=','usuarios.id')
            ->select('usuarios.id as usuario_id','usuarios.nombre as usuario_nombre', DB::raw('GROUP_CONCAT(producto SEPARATOR "; ") as productos'),'SUM(cantidad) as total_cantidad','SUM(total) as total_por_usuario')
            ->groupBy('usuarios.id','usuarios.nombre')
            ->get();
        return response()->json($rows);
    }

    // --- ELOQUENT METHODS ---
    public function elo_users()
    {
        $users = Usuario::all();
        return response()->json($users);
    }

    public function elo_orders_user_2()
    {
        $orders = Pedido::where('id_usuario',2)->get();
        return response()->json($orders);
    }

    public function elo_orders_with_user_details()
    {
        $orders = Pedido::with('usuario')->get();
        return response()->json($orders);
    }

    public function elo_orders_price_range()
    {
        $orders = Pedido::whereBetween('total',[100,250])->get();
        return response()->json($orders);
    }

    public function elo_users_start_r()
    {
        $users = Usuario::where('nombre','like','R%')->get();
        return response()->json($users);
    }

    public function elo_count_orders_user_5()
    {
        $count = Pedido::where('id_usuario',5)->count();
        return response()->json(['user_id'=>5,'orders_count'=>$count]);
    }

    public function elo_orders_with_users_desc()
    {
        $orders = Pedido::with('usuario')->orderBy('total','desc')->get();
        return response()->json($orders);
    }

    public function elo_orders_total_sum()
    {
        $sum = Pedido::sum('total');
        return response()->json(['total_sum'=>$sum]);
    }

    public function elo_cheapest_order_with_user()
    {
        $order = Pedido::with('usuario')->orderBy('total','asc')->first();
        return response()->json($order);
    }

    public function elo_group_product_qty_total_by_user()
    {
        $rows = Pedido::with('usuario')->get()->groupBy(function($item){
            return $item->usuario->id;
        })->map(function($group){
            return [
                'usuario_id' => $group->first()->usuario->id,
                'usuario_nombre' => $group->first()->usuario->nombre,
                'productos' => $group->pluck('producto')->unique()->values()->all(),
                'total_cantidad' => $group->sum('cantidad'),
                'total_por_usuario' => $group->sum('total')
            ];
        })->values();
        return response()->json($rows);
    }
}
