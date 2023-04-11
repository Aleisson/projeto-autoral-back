import { modelError } from "@/protocols/error.protocols";
import { ERROR_NAME } from "@/enums/errorName.enums";

function notFoundIdDeputadosError(idDeputado: number): modelError {
    return {
        name: ERROR_NAME.NOT_FOUND_ID_DEPUTADOS,
        message: ` 
        
            Not Found id do deputado: ${idDeputado} 
            
        `
    };

}

export{
    notFoundIdDeputadosError,
}