/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as OpikApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { TraceWrite } from "../../../../types/TraceWrite";

export const TraceBatchWrite: core.serialization.Schema<serializers.TraceBatchWrite.Raw, OpikApi.TraceBatchWrite> =
    core.serialization.object({
        traces: core.serialization.list(TraceWrite),
    });

export declare namespace TraceBatchWrite {
    export interface Raw {
        traces: TraceWrite.Raw[];
    }
}
