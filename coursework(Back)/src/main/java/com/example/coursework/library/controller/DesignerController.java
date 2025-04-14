package com.example.coursework.library.controller;

import com.example.coursework.library.dto.DesignerDTO;
import com.example.coursework.library.model.Designer;
import com.example.coursework.library.service.DesignerService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Designers") //http://localhost:8080/Users/getOneById
@CrossOrigin ("Http://localhost:5173")
@Tag(name="Дизайнеры", description = "Контроллер для работы с дизайнерами")
public class DesignerController extends GenericController<Designer, DesignerDTO> {

    public DesignerController(DesignerService designerService) {
        super(designerService);
    }

    @Operation(description = "Добавить продукт к дизайнеру")
    @RequestMapping(value = "/addProduct", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<DesignerDTO> addProduct(@RequestParam(value = "productId") Long productId,
                                               @RequestParam(value = "designerId") Long designerId) {
        return ResponseEntity.status(HttpStatus.OK).body(((DesignerService)service).addProduct(productId, designerId));
    }
}
