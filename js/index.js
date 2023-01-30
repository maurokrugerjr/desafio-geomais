	var dados = []

	function PopulaTabela() {
		if (Array.isArray(dados)) {

			localStorage.setItem("__dados__", JSON.stringify(dados))

			$("#tblDados tbody").html("")

			dados.forEach(function (item) {
				$("#tblDados tbody").append(`<tr>
						<td>${item.ID}</td>
						<td>${item.Nome}</td>
						<td>${item.CPFRG}</td>
						<td>${item.DtNascimento}</td>
						<td>${item.Sexo}</td>
						<td><button="button" class="btn btn-primary"><i class="fa fa-edit" /></button></td>
						<td><button="button" class="btn btn-danger"><i class="fa fa-trash" /></button></td>
					</tr>`)
			})
		}
	}

	$(function () {

		dados = JSON.parse(localStorage.getItem("__dados__"))				

		if (dados) {
			PopulaTabela()
		}

		$("#btnSalvar").click(function () {

			let Nome = $("#txtNome").val()
			let CPFRG = $("#txtCPFRG").val()
			let DtNascimento = $("#txtDtNascimento").val()
			let Sexo = $("#txtSexo").val()

			let registro = {}

			registro.Nome = Nome 
			registro.CPFRG = CPFRG 
			registro.DtNascimento = DtNascimento
			registro.Sexo = Sexo 

			registro.ID = dados.length + 1

			dados.push(registro)

			alert("Registro salvo com sucesso")
			$("#modalRegistro").modal("hide")

			$("#txtNome").val("")
			$("#txtCPFRG").val("")
			$("#txtDtNascimento").val("")
			$("#txtSexo").val("")

			PopulaTabela() 
		})

	})