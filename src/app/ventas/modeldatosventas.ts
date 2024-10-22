export class Ventas {
    public header: VentasCabecera = new VentasCabecera();
    public detail: VentasDetalle[] = []
}
export class VentasCabecera {
    public date: Date = new Date();
    public user_id: string = "";
    public total_sale: number = 0;
}
export class VentasDetalle {
    public product_id: number = 0;
    public sale_value: number = 0;
    public calculated_iva: number = 0;
}