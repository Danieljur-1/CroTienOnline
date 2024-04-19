<?php
$success = "Agradecimiento.html";
$error = "Ha habido un error";

// Obtiene los datos del formulario
$nombreCliente = $_POST['nombre'];
$emailCliente = $_POST['email'];
$productos = json_decode($_POST['productos'], true);

// Genera un identificador de pedido único
$identificadorPedido = '#' . uniqid();

// Ruta del archivo Excel para guardar la reserva
$excelFile = "./../../web/carrito/reserva.xlsx";

// Si el archivo Excel existe, carga su contenido
if (file_exists($excelFile)) {
    $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load($excelFile);
    $worksheet = $spreadsheet->getActiveSheet();
} else {
    // Si el archivo Excel no existe, redirecciona a página de error
    header("Location: $error");
    exit();
}

// Encuentra la última fila ocupada en la hoja
$highestRow = $worksheet->getHighestRow();

// Escribe los datos de los productos y del cliente en la siguiente fila disponible en la hoja
foreach ($productos as $producto) {
    $worksheet->setCellValue('A' . ($highestRow + 1), $identificadorPedido);
    $worksheet->setCellValue('B' . ($highestRow + 1), $nombreCliente);
    $worksheet->setCellValue('C' . ($highestRow + 1), $emailCliente);
    $worksheet->setCellValue('D' . ($highestRow + 1), $producto['nombre']);
    $worksheet->setCellValue('E' . ($highestRow + 1), $producto['precio']);
    $worksheet->setCellValue('F' . ($highestRow + 1), $producto['cantidad']);
    $worksheet->setCellValue('G' . ($highestRow + 1), $producto['precio']);
    $worksheet->setCellValue('H' . ($highestRow + 1), $producto['precioTotal']);
    $highestRow++;
}

// Guarda los cambios en el archivo Excel
$writer = \PhpOffice\PhpSpreadsheet\IOFactory::createWriter($spreadsheet, 'Xlsx');
$writer->save($excelFile);

// Éxito
header("Location: $success");
?>
