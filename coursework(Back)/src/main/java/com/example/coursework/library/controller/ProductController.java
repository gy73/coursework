package com.example.coursework.library.controller;

import com.example.coursework.library.dto.ProductDTO;
import com.example.coursework.library.model.Product;
import com.example.coursework.library.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
@CrossOrigin ("Http://localhost:5173")
@Tag(name = "Продукты", description = "Контроллер для работы с продуктами")
public class ProductController extends GenericController<Product, ProductDTO>{
    public ProductController (ProductService productService){
        super(productService);
    }

    @Operation(description = "Добавить дизайнера к продукту")
    @RequestMapping(value = "/addDesigner", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ProductDTO> addDesigner(@RequestParam(value = "productId") Long productId,
                                                  @RequestParam(value = "designerId") Long designerId) {

        return ResponseEntity.status(HttpStatus.OK).body(((ProductService) service).addDesigner(productId, designerId));
    }
}
