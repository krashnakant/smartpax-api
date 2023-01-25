export class CreateBenchmarkDto {
    readonly value: string;
    readonly chart_setting_id: number;
    readonly label: string;
    readonly color_code: string;
    readonly delete_status?:boolean;
}
