import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView } from 'react-native';
import { AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'; 

import Data from './data.json';
import { CHARCOAL, CORNLIGHT, CORNDARK, WHITE, BLACK } from '../colors';

const fixNumber = (num, posfix) => {
  if (typeof num === 'number') return `${num.toFixed(2)} ${posfix ? posfix : ''}`;
  return num;
};

export default function List({ search }) {
  const [list, setList] = useState(Data);
  const [selected, setSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const ShowModal = (id) => {
    const l = Data.filter(i => i.id === id);
    
    setSelected(l[0]);
    setModalVisible(true);
  };

  useEffect(() => {
    const add = Data.filter(i => i.description.toLowerCase().match(search.toLowerCase()));
    if (add.length > 0) setList(add);
  }, [search]);

  return (
    <>
      <View style={styles.wrapper}>
        {list.map(item => (
          <TouchableOpacity
            style={styles.item}
            key={item.id.toString()}
            onPress={() => {
              ShowModal(item.id);
            }}
          >
            <Text style={styles.text}>{item.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.modalView}>
          <SafeAreaView>
            <View style={styles.modalHeader}>
              <Text style={styles.ModalTitle}>{selected && selected.description}</Text>
              <TouchableOpacity onPress={() => { setModalVisible(false); }}>
                <AntDesign name="closecircleo" size={32} color={WHITE} />
              </TouchableOpacity>
            </View>
            <Text style={styles.ModalSubTitle}>{selected && selected.category}</Text>
            <Text style={styles.ModalSubTitle}>Em 100g:</Text>

            {selected && (
              <View style={styles.modalList}>
                <View style={styles.modalListItem}>
                  <View style={styles.box}>
                    <FontAwesome5 name="fire" size={48} color={WHITE} />
                    <Text style={styles.modalListTextT}>Energy</Text>  
                  </View>
                  <Text style={styles.modalListText}>{fixNumber(selected.energy_kcal, 'Kcal')}</Text>
                </View>

                <View style={styles.modalListItem}>
                  <View style={styles.box}>
                    <MaterialCommunityIcons name="blood-bag" size={48} color={WHITE} />
                    <Text style={styles.modalListTextT}>Cholesterol</Text>  
                  </View>
                  <Text style={styles.modalListText}>{fixNumber(selected.cholesterol_mg, 'mg')}</Text>
                </View>
                
                <View style={styles.modalListItem}>
                  <View style={styles.box}>
                    <MaterialCommunityIcons name="cow" size={52} color={WHITE} />
                    <Text style={styles.modalListTextT}>Protein</Text>  
                  </View>
                  <Text style={styles.modalListText}>{fixNumber(selected.protein_g, 'g')}</Text>
                </View>

                <View style={styles.modalListItem}>
                  <View style={styles.box}>
                    <MaterialCommunityIcons name="pasta" size={48} color={WHITE} />
                    <Text style={styles.modalListTextT}>Carbs</Text>  
                  </View>
                  <Text style={styles.modalListText}>{fixNumber(selected.carbohydrate_g, 'g')}</Text>
                </View>

                <View style={styles.modalListItem}>
                  <View style={styles.box}>
                    <FontAwesome5 name="bacon" size={48} color={WHITE} />
                    <Text style={styles.modalListTextT}>Fat</Text>  
                  </View>
                  <Text style={styles.modalListText}>{fixNumber(selected.lipid_g, 'g')}</Text>
                </View>
                
                <View style={styles.modalListItem}>
                  <View style={styles.box}>
                    <FontAwesome5 name="seedling" size={48} color={WHITE} />
                    <Text style={styles.modalListTextT}>Fiber</Text>  
                  </View>
                  <Text style={styles.modalListText}>{fixNumber(selected.fiber_g, 'g')}</Text>
                </View>
              </View>
            )}
          </SafeAreaView>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 24,
  },
  item: {
    width: '100%',
    paddingVertical: 24,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: CORNLIGHT,
  },
  text: {
    color: BLACK,
    fontSize: 18,
    lineHeight: 32
  },
  modalView: {
    flex: 1,
    backgroundColor: CHARCOAL,
    paddingHorizontal: 24,
    color: WHITE,
  },
  modalHeader: {
    paddingVertical: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  ModalTitle: {
    maxWidth: '90%',
    fontSize: 24,
    fontWeight: 'bold',
    color: WHITE,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalListText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    color: WHITE,
  },
  modalListTextT: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 12,
    color: WHITE,
  },
  ModalSubTitle: {
    fontSize: 18,
    fontWeight: '400',
    paddingBottom: 32,
    color: WHITE,
  },
  modalList: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: CORNDARK,
  },
  modalListItem: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    borderWidth: 1,
    borderColor: CORNDARK,
  },
});
