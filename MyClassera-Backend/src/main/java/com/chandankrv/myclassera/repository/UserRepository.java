package com.chandankrv.myclassera.repository;

import com.chandankrv.myclassera.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Chandan on 05 August, 2024.
 * --------------------------------------
 * Q. Problem Statement :
 */
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
