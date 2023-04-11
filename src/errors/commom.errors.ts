import { modelError } from "@/protocols/error.protocols";
import { ERROR_NAME } from "@/enums/errorName.enums";

function notFoundError(): modelError {
    return {
        name: ERROR_NAME.NOT_FOUND,
        message: "NOT FOUND"
    };
}

export {
    notFoundError,
};