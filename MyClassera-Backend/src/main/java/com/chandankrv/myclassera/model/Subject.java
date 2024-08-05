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
@Table(name = "subjects")
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;

}
