package com.login.login;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class UsuarioController {

    private List<Usuario> listaUsuarios = new ArrayList<>();

    @PostMapping("/cadastrar")
    public String cadastrarUsuario(@RequestBody Usuario novoUsuario){
        listaUsuarios.add(novoUsuario);
        novoUsuario.setAutenticado(false);

        return String.format("Usuário %s cadastrado com sucesso!", novoUsuario.getNome());

    }

    @PostMapping("/login/{email}/{senha}")
    public Usuario autenticarUsuario(@PathVariable String email,
                                    @PathVariable String senha){
        for(Usuario usuario : listaUsuarios) {
            if(usuario.getEmail().equals(email) && usuario.senha().equals(senha)) {

                usuario.setAutenticado(true);

                return usuario;
            }
        }

        return null;

    }

    @GetMapping("/usuario")
    public List<Usuario> exibirUsuarios() {
        List<Usuario> listaUsuariosOrdernados = listaUsuarios.stream()
                .sorted(Comparator.comparing(Usuario::getNome))
                .collect(Collectors.toList());

        return listaUsuariosOrdernados;
    }

    @DeleteMapping("/logoff/{email}")
    public String logoff(@PathVariable String email) {

        for(Usuario usuario : listaUsuarios) {

            if(usuario.getEmail().equals(email) && usuario.getAutenticado().equals(true)) {
                usuario.setAutenticado(false);

                return String.format("Usuário %s saiu do sistema.", usuario.getNome());
            }
        }
        return String.format("Usuário %s não autenticado.", email);

    }

}
