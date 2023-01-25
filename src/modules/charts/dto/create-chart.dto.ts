export class CreateChartDto {
    readonly chart_name: string;
    readonly chart_type: number;
    readonly item_id: number;
    readonly delete_status?:boolean;
}
