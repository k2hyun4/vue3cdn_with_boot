package com.example.prac_vue_router;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
    @GetMapping({"/page", "/page/**"})
    public String main() {
        return "index";
    }
}
