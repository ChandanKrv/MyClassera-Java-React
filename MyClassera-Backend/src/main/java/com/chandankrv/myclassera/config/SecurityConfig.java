package com.chandankrv.myclassera.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

/**
 * Created by Chandan on 06 August, 2024.
 * --------------------------------------
 * Q. Problem Statement :
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .requestMatchers("/api/**").permitAll() // Allow all requests to /api/** endpoints
                .anyRequest().authenticated() // Require authentication for all other requests
                .and()
                .csrf().disable() // Disable CSRF protection for simplicity
                .httpBasic(); // Enable basic authentication
        return http.build();
    }
}
