import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import myfetch from '../../lib/myfetch';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import AddBoxIcon from '@mui/icons-material/AddBox';
// import Waiting from '../../ui/Waiting';
import useConfirmDialog from '../../ui/useConfirmDialog';
import useNotification from '../../ui/useNotification';
import useWaiting from '../../ui/useWaiting';

export default function CarList() {
  const columns = [
    {
      field: 'id',
      headerName: 'Cód.',
      width: 70,
      type: 'number',
    },
    {
      field: 'model',
      headerName: 'Modelo/Marca',
      width: 200,
      valueGetter: (params) => `${params.row.model} / ${params.row.brand}`,
    },
    {
      field: 'color',
      headerName: 'Cor',
      width: 100,
    },
    {
      field: 'year_manufacture',
      headerName: 'Ano de fabricação',
      width: 160,
    },
    {
      field: 'imported',
      headerName: 'Importado',
      width: 100,
      renderCell: (params) => (params.value ? 'sim' : 'não'),
    },
    {
      field: 'plates',
      headerName: 'Placas',
      width: 160,
    },
    {
      field: 'selling_date',
      headerName: 'Data da venda',
      width: 150,
      renderCell: (params) => {
        if (!params.value) return '';
        const date = new Date(params.value);
        return date.toLocaleDateString('pt-BR');
      },
    },
    {
      field: 'selling_price',
      headerName: 'Preço de venda',
      width: 150,
      renderCell: (params) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(params.value)
      },
    {
      field: '_edit',
      headerName: 'Editar',
      headerAlign: 'center',
      align: 'center',
      width: 90,
      sortable: false,
      renderCell: (params) => (
        <Link to={'./' + params.id}>
          <IconButton aria-label="Editar">
            <EditIcon />
          </IconButton>
        </Link>
      ),
    },
    {
      field: '_delete',
      headerName: 'Excluir',
      headerAlign: 'center',
      align: 'center',
      width: 90,
      sortable: false,
      renderCell: (params) => (
        <IconButton aria-label="Excluir" onClick={() => handleDeleteButtonClick(params.id)}>
          <DeleteForeverIcon color="error" />
        </IconButton>
      ),
    },
  ];

  const [state, setState] = React.useState({
    cars: [],
  });
  const { cars } = state;

  const { askForConfirmation, ConfirmDialog } = useConfirmDialog();
  const { notify, Notification } = useNotification();
  const { showWaiting, Waiting } = useWaiting();

  React.useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    showWaiting();
    try {
      const result = await myfetch.get('/cars?by=brand');
      setState((prevState) => ({ ...prevState, cars: result }));
    } catch (error) {
      console.error(error);
      notify('ERRO: ' + error.message, 'error');
    } finally {
      showWaiting(false);
    }
  }

  async function handleDeleteButtonClick(deleteId) {
    if (await askForConfirmation('Deseja realmente excluir este item?', 'Confirmar operação')) {
      showWaiting();
      try {
        await myfetch.delete(`/cars/${deleteId}`);
        fetchData();
        notify('Item excluído com sucesso.');
      } catch (error) {
        console.error(error);
        notify('ERRO: ' + error.message, 'error');
      } finally {
        showWaiting(false);
      }
    }
  }

  return (
    <>
      <Waiting />
      <Notification />
      <ConfirmDialog />

      <Typography variant="h1" gutterBottom>
        Listagem de carros
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'right', mb: 2 }}>
        <Link to="./new">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<AddBoxIcon />}
          >
            Novo carro
          </Button>
        </Link>
      </Box>

      <Paper elevation={10}>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={cars}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
          />
        </Box>
      </Paper>
    </>
  );
}
