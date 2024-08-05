package com.chandankrv.myclassera.model;

import jakarta.persistence.*;
import lombok.*;

/**
 * Created by Chandan on 04 August, 2024.
 * --------------------------------------
 * Q. Problem Statement :
 */

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;
    private String address;

    private int subject_id;
}

