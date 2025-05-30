/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
import { DatasetItemSource } from "./DatasetItemSource";
import { JsonNode } from "./JsonNode";
import { ExperimentItem } from "./ExperimentItem";

export const DatasetItem: core.serialization.ObjectSchema<serializers.DatasetItem.Raw, OpikApi.DatasetItem> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        traceId: core.serialization.property("trace_id", core.serialization.string().optional()),
        spanId: core.serialization.property("span_id", core.serialization.string().optional()),
        source: DatasetItemSource,
        data: JsonNode,
        experimentItems: core.serialization.property(
            "experiment_items",
            core.serialization.list(ExperimentItem).optional(),
        ),
        datasetId: core.serialization.property("dataset_id", core.serialization.string().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        lastUpdatedAt: core.serialization.property("last_updated_at", core.serialization.date().optional()),
        createdBy: core.serialization.property("created_by", core.serialization.string().optional()),
        lastUpdatedBy: core.serialization.property("last_updated_by", core.serialization.string().optional()),
    });

export declare namespace DatasetItem {
    export interface Raw {
        id?: string | null;
        trace_id?: string | null;
        span_id?: string | null;
        source: DatasetItemSource.Raw;
        data: JsonNode.Raw;
        experiment_items?: ExperimentItem.Raw[] | null;
        dataset_id?: string | null;
        created_at?: string | null;
        last_updated_at?: string | null;
        created_by?: string | null;
        last_updated_by?: string | null;
    }
}
