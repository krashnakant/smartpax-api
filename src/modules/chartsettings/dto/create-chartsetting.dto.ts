export class CreateChartsettingDto {
    readonly item_id: number;
    readonly chart_id: number;
    readonly xaxis: string;
    readonly yaxis: string;
    readonly calculation: string;
    readonly is_position: boolean;
    readonly position_type: string;
    readonly items_count: number;
    readonly is_cumulative: boolean;
    readonly sort_by: boolean;
    readonly is_empty: boolean;
    readonly group_type: string;
    readonly delete_status?:boolean;
}
