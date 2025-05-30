# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic
import typing_extensions
from ..core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from ..core.serialization import FieldMetadata


class JsonSchema(UniversalBaseModel):
    name: typing.Optional[str] = None
    strict: typing.Optional[bool] = None
    schema_: typing_extensions.Annotated[
        typing.Optional[typing.Dict[str, typing.Dict[str, typing.Optional[typing.Any]]]], FieldMetadata(alias="schema")
    ] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
