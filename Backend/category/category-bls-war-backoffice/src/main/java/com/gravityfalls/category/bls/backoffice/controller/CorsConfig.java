package com.gravityfalls.category.bls.backoffice.controller;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins(
                        "http://localhost:4200")
                .allowedMethods("GET","HEAD","POST","PUT","DELETE","OPTIONS","PATCH")
                .exposedHeaders("Content-Type: application/json;charset=UTF-8")
                .allowCredentials(false)
        ;
    }

}