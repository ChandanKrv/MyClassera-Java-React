package com.chandankrv.myclassera.model;

import lombok.*;


/**
 * Created by Chandan on 07 August, 2024.
 * --------------------------------------
 * Q. Problem Statement :
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class JwtRequest {
    private String email;
    private String password;
}
